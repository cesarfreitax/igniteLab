import imgLogo from '../../src/assets/logo_nobg_cesarapp.png'

export function Logo() {
  return (
    <div className="flex justify-center">
      <img src={imgLogo}  className="h-24" alt="logo" />
    </div>
  );
}

