type Props = {
  name: string;
  image: string;
  url: string;
  className: string;
};

export function SponsorLogo({ url, name, image, className }: Props) {
  return (
    <a href={url}>
      <img alt={name} src={image} className={className} />
    </a>
  );
}
