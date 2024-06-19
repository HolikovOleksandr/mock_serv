import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import * as os from 'os';
import * as path from 'path';
import { ImageController } from './image.controller';
import * as multer from 'multer';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: multer.diskStorage({
          destination: (req, file, cb) => {
            cb(null, path.join(os.homedir(), 'Desktop'));
          },
          filename: (req, file, cb) => {
            cb(null, file.originalname);
          },
        }),
      }),
    }),
  ],
  controllers: [ImageController],
})
export class ImageModule {}
