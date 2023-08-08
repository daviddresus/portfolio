import './Portfolio.css'
import Title from '../../Components/Title/Title.js';

export default function Portfolio() {
  return (
    <div>
      <Title text="Portfolio"/>
      <iframe src="http://localhost/portfolio_backend/portal.php?site=blume.php"></iframe>
    </div>
  )
}