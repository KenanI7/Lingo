import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
};

export function InputWithLabel({ label, type, id, placeholder }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}
