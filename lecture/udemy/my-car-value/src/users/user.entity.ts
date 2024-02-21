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

  /**
   * 삭제는 hook과 연관점
   * delete를 호출해서 제거하면 hook이 호출되지 않는다.
   */
  @AfterRemove()
  logRemove() {
    // this.id는 방금 insert한 엔티티에 대한 참조이다.
    console.log('Removed User with id', this.id);
  }
}
