import { render } from "@testing-library/react";
import SvgIcon from ".";

const DummyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

describe("#SvgIcon", () => {
  it("renderiza o SVG passado como prop", () => {
    const { getByTestId } = render(
      <SvgIcon testid="dummy-icon" icon={<DummyIcon />} />,
    );
    expect(getByTestId("dummy-icon")).toBeInTheDocument();
  });

  it("aplica cor e tamanho padrão", () => {
    const { getByTestId } = render(
      <SvgIcon testid="dummy-icon" icon={<DummyIcon />} />,
    );
    const svg = getByTestId("dummy-icon");
    expect(svg).toHaveAttribute("fill", "currentColor");
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
  });

  it("aplica cor e tamanho customizados", () => {
    const { getByTestId } = render(
      <SvgIcon
        testid="dummy-icon"
        icon={<DummyIcon />}
        color="#123456"
        size={40}
      />,
    );
    const svg = getByTestId("dummy-icon");
    expect(svg).toHaveAttribute("fill", "#123456");
    expect(svg).toHaveAttribute("width", "40");
    expect(svg).toHaveAttribute("height", "40");
  });
});
