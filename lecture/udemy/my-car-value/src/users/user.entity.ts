import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

// User  Entity
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  /**
   * TypeORM hook
   * AfterInsert, AfterUpdate, AfterRemove
   */
  @AfterInsert()
  logInsert() {
    // this.id는 방금 insert한 엔티티에 대한 참조이다.
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    // this.id는 방금 insert한 엔티티에 대한 참조이다.
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    // this.id는 방금 insert한 엔티티에 대한 참조이다.
    console.log('Removed User with id', this.id);
  }
}
