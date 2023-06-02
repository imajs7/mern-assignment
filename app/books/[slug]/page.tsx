type Props = {
  params: {
    slug: string;
  };
};
export default function Page({ params }: Props) {
  return <div>My Post : {params.slug}</div>;
}
