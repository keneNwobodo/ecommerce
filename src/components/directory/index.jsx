import shopMen from '../../assets/shopMens.jpg';
import shopWomen from '../../assets/shopWomens.jpg';
import './styles.scss';

export default function Directory () {
  return (
    <div className="directory">
      <div className="wrapper">
        <div
          className="item"
          style={{
            backgroundImage: `url(${shopWomen})`,
          }}
        >
          <a href="">Shop Womens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${shopMen})`,
          }}
        >
          <a href="">Shop Mens</a>
        </div>
      </div>
    </div>
  );
}
