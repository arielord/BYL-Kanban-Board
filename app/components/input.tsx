type InputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  id?: string;
  defaultValue?: string;
};

export default function Input ({ handleChange, placeholder, type, id, defaultValue }: InputProps) {
  function capitalize(string: string) {
    return string.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  return (
    <div>
      {id && <label htmlFor={id}>{capitalize(id)}</label>}
      <input type={type} id={id} placeholder={placeholder} onChange={handleChange} defaultValue={defaultValue} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
    </div>
  );
}