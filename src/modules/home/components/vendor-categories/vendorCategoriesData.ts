import { IoFastFood, IoCart, IoBeer, IoMedkit } from 'react-icons/io5';
import { MdPets } from 'react-icons/md';
import { FaSpa } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface VendorCategory {
  id: number;
  title: string;
  subtitle: string;
  icon: IconType;
  categoryKey: string;
  color: string;
  image: string;
  description: string;
}

export const vendorCategories: VendorCategory[] = [
  {
    id: 1,
    title: 'Restaurantes',
    subtitle: '120+ parceiros',
    icon: IoFastFood,
    categoryKey: 'restaurante',
    color: '#FF6B35',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    description: 'Fast food, lanches, pizzas e muito mais'
  },
  {
    id: 2,
    title: 'Farmácias',
    subtitle: '45+ parceiros',
    icon: IoMedkit,
    categoryKey: 'farmacia',
    color: '#4A90E2',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop',
    description: 'Medicamentos, suplementos e saúde'
  },
  {
    id: 3,
    title: 'Mercados',
    subtitle: '80+ parceiros',
    icon: IoCart,
    categoryKey: 'mercado',
    color: '#67FB94',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
    description: 'Produtos alimentícios e essenciais'
  },
  {
    id: 4,
    title: 'Bebidas',
    subtitle: '35+ parceiros',
    icon: IoBeer,
    categoryKey: 'bebidas',
    color: '#FFD93D',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
    description: 'Cervejas, vinhos, destilados e mais'
  },
  {
    id: 5,
    title: 'Pet Shop',
    subtitle: '28+ parceiros',
    icon: MdPets,
    categoryKey: 'petshop',
    color: '#9B59B6',
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop',
    description: 'Ração, acessórios e produtos para pets'
  },
  {
    id: 6,
    title: 'Cosméticos',
    subtitle: '52+ parceiros',
    icon: FaSpa,
    categoryKey: 'cosmeticos',
    color: '#E91E63',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
    description: 'Maquiagem, perfumes e cuidados pessoais'
  }
];
