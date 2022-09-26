
import { IsNumberString } from 'class-validator';
import { type } from 'os';
import { timestamp } from 'rxjs';
import { ProductCategoriesController } from 'src/product/controllers/category.controller';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ProductPostCategoryEntity } from '../Category/category.entity';


export enum ProductData {
  AVAILABLE = "Available",
  OUTOFSTOCK = "OutOfStock"
}
// export enum ProductSize {
//   SMALL = "S",
//   MEDIUM = "M",
//   LARGE = "L",
//   EXTRALARGE = "XL"
// }
@Entity({ name: "product_post" })

export class ProductPostEntity {
  @PrimaryGeneratedColumn()
  @IsNumberString()
  id: number;

  // @Column({ unique: true })
  // productName: string;

  @Column({ type: 'bigint', default: null })
  price: number;

  // @Column({ type:'enum',enum:ProductData,default:null})
  //stock:ProductData;

  // @Column({ type:'enum',enum:ProductSize,default:null})
  //size: ProductSize;

  // @Column({ type: 'date' })
  // manufacturingDate?: string;

  // @Column({ type: 'date' })
  // expiryDate?: string;

  // @Column({ default: '' })
  // image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToMany(() => ProductPostCategoryEntity)
  @JoinTable()
  public products: ProductPostCategoryEntity[]

}
