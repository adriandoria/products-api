import {Entity, Column, PrimaryColumn, CreateDateColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'
/*
- v4 = tipo de uuid.
- as uuid = renomeia o v4 para uuid.
*/

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: String

  @Column()
  name: String

  @Column()
  email: String

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export{User}