import {
    IsNotEmpty,
    IsString,
    Length,
    Min,
    Max,
    IsUUID,
  } from 'class-validator';
  
  export class UpdateBookDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3, 100)
    title: string;
  
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    rating: number;
  
    @IsNotEmpty()
    @Min(0)
    @Max(1000)
    price: number;
  
    @IsNotEmpty()
    @IsUUID()
    authorId: string;
  }