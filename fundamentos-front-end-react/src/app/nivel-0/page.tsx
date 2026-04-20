import { Hobbies } from "@/components/Hobbies";
import { MeuNome } from "@/components/MeuNome";

const Page = () => (
  <div>
    <MeuNome name={"Allyson"} age={29} birthDate={new Date(1997, 0, 8)}/>
    <Hobbies/>
  </div>
)

export default Page;


