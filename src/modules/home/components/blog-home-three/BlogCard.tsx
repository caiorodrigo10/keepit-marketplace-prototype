import Image from 'next/image';
import Link from 'next/link';
import { FaRegCalendarCheck, FaRegUser } from 'react-icons/fa6';

const BlogCard = ({ item }: { item: any }) => {
  return (
    <div className="blog__item blog__item--style2">
      <div className="blog__item-inner">
        <div className="blog__thumb">
          <Image
            width={401}
            height={266}
            style={{ aspectRatio: '3/2' }}
            src={item.imageSrc}
            alt="blog Images"
          />
        </div>
        <div className="blog__content">
          <div className="blog__meta">
            <Link href="#">
              <span className={`blog__meta-tag ${item.tagClass}`}>
                {item.tag}
              </span>
            </Link>
          </div>
          <h4>
            <Link href={item.link || ''}>{item.title}</Link>
          </h4>
          <div className="blog__admin">
            <div className="blog__admin-name">
              <span>
                <FaRegUser />
              </span>{' '}
              By Benjamin
            </div>
            <div className="blog__admin-date">
              <span>
                <FaRegCalendarCheck />
              </span>{' '}
              {item.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
