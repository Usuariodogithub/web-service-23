import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number | undefined;

    @Column()
    description:string | undefined;

    @Column()
    price:number | undefined;

    @Column()
    quantity:number | undefined;

}