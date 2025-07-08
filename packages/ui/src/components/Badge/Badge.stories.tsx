import type { Meta, StoryObj } from '@storybook/react';
import Badge from './';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Componentes/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge para exibir número, texto ou ponto de alerta.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
    children: <NotificationsIcon fontSize="large" />,
  },
};

export const WithText: Story = {
  args: {
    badgeContent: 'Novo',
    color: 'success',
    children: <MailIcon fontSize="large" />,
  },
};

export const ZeroVisible: Story = {
  args: {
    badgeContent: 0,
    showZero: true,
    color: 'error',
    children: <MailIcon fontSize="large" />,
  },
};

export const MaxValue: Story = {
  args: {
    badgeContent: 150,
    max: 99,
    color: 'secondary',
    children: <NotificationsIcon fontSize="large" />,
  },
};

export const DotVariant: Story = {
  args: {
    variant: 'dot',
    color: 'warning',
    children: <MailIcon fontSize="large" />,
  },
};
