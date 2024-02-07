import Image from "next/image";
import { Card } from "./ui/card";

const Header = () => {
  return (
    <Card>
      <Image src="/logo" alt="FSW Barber" height={22} width={120} />
    </Card>
  );
};

export default Header;
