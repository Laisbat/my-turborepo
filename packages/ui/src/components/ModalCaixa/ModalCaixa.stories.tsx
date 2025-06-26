import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ModalCaixa from ".";
import Button from "../Button";

const meta: Meta<typeof ModalCaixa> = {
  title: "Design System/Componentes/ModalCaixa",
  component: ModalCaixa,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Um modal estilizado para uso em aplicações que seguem o design do CAIXA Consórcio.",
      },
    },
  },
  args: {
    open: false,
    title: "Título do Modal",
    children: "Conteúdo do modal aqui.",
  },
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "closed" },
    title: { control: "text" },
    children: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof ModalCaixa>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button color="secondary" onClick={() => setOpen(true)}>
          Abrir Modal
        </Button>
        <ModalCaixa
          open={open}
          closeIcon={true}
          onClose={() => setOpen(false)}
          title="CAIXA Consórcio"
          children={
            <>
              <p>Teste</p>
            </>
          }
          actions={<Button onClick={() => setOpen(false)}>Fechar</Button>}
        />
      </>
    );
  },
};

export const ModalAlerta: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button color="secondary" onClick={() => setOpen(true)}>
          Abrir Modal
        </Button>
        <ModalCaixa
          open={open}
          onClose={() => setOpen(false)}
          title="CAIXA Consórcio"
          children={
            <>
              <p>Teste</p>
            </>
          }
          actions={<Button onClick={() => setOpen(false)}>Fechar</Button>}
        />
      </>
    );
  },
  args: {
    title: "Modal Interativo",
    children: "Clique no botão para abrir o modal.",
    open: false,
  },
};
