import { useNavigate } from 'react-router-dom';
import hatiLogo from '@/assets/svgs/common/logo.svg';

export default function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="h-[52px] py-2 flex items-center justify-center mt-[11px]">
      <button onClick={handleLogoClick} className="cursor-pointer">
        <img src={hatiLogo} alt="HATI Logo" className="w-auto h-[50px]" />
      </button>
    </header>
  );
}
