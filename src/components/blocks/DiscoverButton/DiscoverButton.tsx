import { Button } from "@atoms/button";

type Props = {
  count: number;
  onClick: () => void;
};

function DiscoverButton({ count, onClick }: Props) {
  return (
    <>
      <Button onClick={onClick}>
        {count > 0 && count + "개 옵션을 포함하여 "}영화 찾기 🔍
      </Button>
    </>
  );
}

export default DiscoverButton;
