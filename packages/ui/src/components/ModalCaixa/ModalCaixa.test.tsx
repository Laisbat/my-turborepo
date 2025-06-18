import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ModalCaixa from ".";

describe("#ModalCaixa", () => {
  it("renderiza quando open for true", () => {
    render(
      <ModalCaixa open={true} onClose={() => {}}>
        <div>Modal Content</div>
      </ModalCaixa>,
    );
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("nao renderiza quando open for false", () => {
    render(
      <ModalCaixa open={false} onClose={() => {}}>
        <div>Hidden Content</div>
      </ModalCaixa>,
    );
    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();
  });

  it("renderiza titulo", () => {
    render(
      <ModalCaixa open={true} onClose={() => {}} title="Test Title">
        <div />
      </ModalCaixa>,
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renderiza children", () => {
    render(
      <ModalCaixa open={true} onClose={() => {}}>
        <span>Child Element</span>
      </ModalCaixa>,
    );
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });

  it("renderiza actions quando passados", () => {
    render(
      <ModalCaixa
        open={true}
        onClose={() => {}}
        actions={<button>Action</button>}
      >
        <div />
      </ModalCaixa>,
    );
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("renderiza close icon se closeIcon for true", () => {
    render(
      <ModalCaixa open={true} onClose={() => {}} closeIcon>
        <div />
      </ModalCaixa>,
    );
    expect(screen.getByLabelText("close")).toBeInTheDocument();
  });

  it("chama onClose quando close icon for clicado", () => {
    const onClose = vi.fn();
    render(
      <ModalCaixa open={true} onClose={onClose} closeIcon>
        <div />
      </ModalCaixa>,
    );
    fireEvent.click(screen.getByLabelText("close"));
    expect(onClose).toHaveBeenCalled();
  });
});
