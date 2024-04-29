import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
};

export function InputWithLabel({ label, type, id, placeholder }: Props) {
  const context = useFormContext();
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        {...context.register(type)}
      />
    </div>
  );
}
