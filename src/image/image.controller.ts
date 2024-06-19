import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class ImageController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: any) {
    const message = 'File successfuly uploaded';

    if (!file) throw new Error('No file uploaded');

    // Process uploaded file here (sent to Db, manipulate, etc.)
    console.log(message, file);
    return { message };
  }
}
