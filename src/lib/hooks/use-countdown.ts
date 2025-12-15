'use client'

import { useState, useEffect, useCallback } from 'react'

export type CountdownStatus = 'normal' | 'warning' | 'urgent' | 'expired'

interface CountdownResult {
  hours: number
  minutes: number
  seconds: number
  totalSeconds: number
  percentage: number
  status: CountdownStatus
  isExpired: boolean
  formattedTime: string
}

interface UseCountdownOptions {
  totalHours?: number // Total hours for percentage calculation
  onExpire?: () => void
  onWarning?: () => void
  onUrgent?: () => void
}

export const useCountdown = (
  expiresAt: string,
  options: UseCountdownOptions = {}
): CountdownResult => {
  const { totalHours = 24, onExpire, onWarning, onUrgent } = options

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime()
    const expiry = new Date(expiresAt).getTime()
    const difference = expiry - now

    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalSeconds: 0,
        percentage: 0,
        status: 'expired' as CountdownStatus,
        isExpired: true,
        formattedTime: '00:00:00',
      }
    }

    const totalSeconds = Math.floor(difference / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    // Calculate percentage based on total hours
    const totalMilliseconds = totalHours * 60 * 60 * 1000
    const percentage = Math.min(100, Math.max(0, (difference / totalMilliseconds) * 100))

    // Determine status
    let status: CountdownStatus = 'normal'
    if (hours < 1) {
      status = 'urgent'
    } else if (hours < 2) {
      status = 'warning'
    }

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    return {
      hours,
      minutes,
      seconds,
      totalSeconds,
      percentage,
      status,
      isExpired: false,
      formattedTime,
    }
  }, [expiresAt, totalHours])

  const [timeLeft, setTimeLeft] = useState<CountdownResult>(calculateTimeLeft())
  const [prevStatus, setPrevStatus] = useState<CountdownStatus>(timeLeft.status)

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      // Trigger callbacks on status change
      if (newTimeLeft.status !== prevStatus) {
        setPrevStatus(newTimeLeft.status)

        if (newTimeLeft.status === 'expired' && onExpire) {
          onExpire()
        } else if (newTimeLeft.status === 'urgent' && onUrgent) {
          onUrgent()
        } else if (newTimeLeft.status === 'warning' && onWarning) {
          onWarning()
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft, onExpire, onWarning, onUrgent, prevStatus])

  return timeLeft
}

export default useCountdown
