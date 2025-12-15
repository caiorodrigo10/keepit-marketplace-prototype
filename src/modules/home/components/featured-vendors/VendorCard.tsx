'use client';
import React from 'react';
import { FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Vendor } from './vendorsData';
import './featured-vendors.scss';

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  return (
    <div className="vendor-card">
      <div className="vendor-card__cover">
        <img
          src={vendor.coverImage}
          alt={vendor.name}
          className="vendor-card__cover-image"
          loading="lazy"
        />
        <div className="vendor-card__overlay"></div>

        {vendor.badges.length > 0 && (
          <div className="vendor-card__badges">
            {vendor.badges.map((badge, index) => (
              <span key={index} className="vendor-card__badge">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="vendor-card__logo-wrapper">
        <img
          src={vendor.logo}
          alt={`${vendor.name} logo`}
          className="vendor-card__logo"
          loading="lazy"
        />
      </div>

      <div className="vendor-card__content">
        <h3 className="vendor-card__name">{vendor.name}</h3>
        <p className="vendor-card__category">{vendor.category}</p>

        <div className="vendor-card__rating">
          <FaStar className="vendor-card__star" />
          <span className="vendor-card__rating-value">{vendor.rating}</span>
          <span className="vendor-card__review-count">({vendor.reviewCount})</span>
        </div>

        <div className="vendor-card__info">
          <div className="vendor-card__info-item">
            <FaClock />
            <span>{vendor.deliveryTime}</span>
          </div>
          <div className="vendor-card__info-item">
            <FaMapMarkerAlt />
            <span>{vendor.distance}</span>
          </div>
        </div>

        {vendor.minimumOrder > 0 && (
          <p className="vendor-card__minimum">
            Pedido mínimo: R$ {vendor.minimumOrder.toFixed(2)}
          </p>
        )}

        <div className="vendor-card__status">
          <span className={`vendor-card__status-badge ${vendor.isOpen ? 'open' : 'closed'}`}>
            {vendor.isOpen ? 'Aberto' : 'Fechado'}
          </span>
          <span className="vendor-card__hours">{vendor.openingHours}</span>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
