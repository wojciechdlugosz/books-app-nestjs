import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FavouriteBookDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  userId: string;
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  bookId: string;
}
