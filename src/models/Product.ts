import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import {v4 as uuid} from 'uuid'


@Entity('products')
class Product {

  @PrimaryColumn()
  readonly id: String

  @Column()
  name: String

  @Column()
  price: String

  @Column()
  user_id: String

  @CreateDateColumn()
    created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export {Product}