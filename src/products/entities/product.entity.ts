import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity({ schema: 'teslo', name: 'product' })
  export class Product extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('text', {
      unique: true,
    })
    title: string;
  
    @Column('float', {
      default: 0,
    })
    price: number;
  
    @Column({
      type: 'text',
      nullable: true,
    })
    description: string;
  
    @Column('text', {
      unique: true,
    })
    slug: string;
  
    @Column('int', {
      default: 0,
    })
    stock: number;
  
    @Column('text', {
      nullable: true,
    })
    sizes: string; // Almacenar como cadena delimitada
  
    @Column('text')
    gender: string;
  
    @Column('text', {
      nullable: true,
      default: '',
    })
    tags: string; // Almacenar como cadena delimitada
  
    // images
  
    @BeforeInsert()
    checkSlugInsert() {
      if (!this.slug) {
        this.slug = this.title;
      }
  
      this.slug = this.slug
        .toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'", '');
    }
  
    @BeforeUpdate()
    checkSlugUpdate() {
      this.slug = this.slug
        .toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'", '');
    }
  }