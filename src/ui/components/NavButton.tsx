import Link from "next/link";

export default function NavButton({
  path,
  value,
  icon,
  customStyle,
}: {
  path: string;
  value: string;
  icon?: React.ReactNode;
  customStyle?: string;
}) {
  return (
    <Link
      href={path}
      className={`btn-link ct-flex-row max-lg:justify-center gap-2 w-full ${customStyle}`}
    >
      {icon} <span className="max-lg:hidden">{value}</span>
    </Link>
  );
}
