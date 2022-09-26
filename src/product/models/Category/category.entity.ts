import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductData, ProductPostEntity} from "../Product/product.entity";

@Entity({name:"Product_catego"})

export class ProductPostCategoryEntity{


    @PrimaryGeneratedColumn()
    id:number

   // @IsNotEmpty()
   // @IsString()
   // @MinLength(1)
   // @MaxLength(15)
   // @IsOptional()
    // @Column({default:''})
    // productSpecification:string;


    @Column({default:''})
    size:string

    // // @IsNotEmpty()
    // // @IsInt()
    // // @IsOptional()
    // @Column()
    // Product_status:string;

    // @IsNotEmpty()
    // @IsEnum(ProductData)
    // @IsOptional()
    // @Column()
    // Product_Size:()=>{
    //   let availableSizes = ["S", "XS", "M", "X", "L", "XXL", "XL"]
    //   for (let i of availableSizes)
    //       if (availableSizes.includes(i)) return i
    //       else "Should be given values"
    // }

    // @IsNotEmpty()
    // @IsEnum(ProductSize)
    // @IsOptional()
    // size:ProductSize;

  //   @IsNotEmpty()
  //   @IsString()
  //  @IsOptional()
  //  @Column({default:null})
  //   manufacturingDate?:string;

  //   @IsNotEmpty()
  //   @IsString()
  //   @IsOptional()
  //   expiryDate?:string;

    // @IsString()
    // @IsOptional()
    // image:string;

    // @ManyToMany(() => ProductPostEntity,(post:ProductPostEntity)=>post.products)
    // @JoinTable()
    //  public post: ProductPostEntity

}