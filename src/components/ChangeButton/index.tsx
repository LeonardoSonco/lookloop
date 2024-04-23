import { Edit2 } from "react-feather";

export default function ChangeButton() {
  return (
    <div className="flex justify-end">
      <span className="w-9 h-9 rounded-full cursor-pointer bg-purple flex justify-center items-center">
        <Edit2 width={18} color="white" fill="white" strokeWidth={0.5} />
      </span>
    </div>
  );
}
