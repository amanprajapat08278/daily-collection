import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class UserEntity {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, sparse: true })
  contact: string;

  @Prop({ unique: true, sparse: true })
  altContact: string;

  @Prop({ enum: ['MALE', 'FEMALE', 'OTHER'] })
  gender: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ default: false })
  isAgent: boolean;
}

export const UserDatabaseName = 'User';
export const UserSchema = SchemaFactory.createForClass(UserEntity);
export type UserDocument = UserEntity & Document;
