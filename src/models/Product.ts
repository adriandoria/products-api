import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import {v4 as uuid} from 'uuid'


@Entity('products')
class Product {

  @PrimaryColumn()
  readonly id: String

  @Column()
  name: String

  @Column()
  description: String

  @Column()
  price: String

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export {Product}