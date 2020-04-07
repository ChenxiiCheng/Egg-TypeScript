// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportProduct from '../../../app/model/product';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Product: ReturnType<typeof ExportProduct>;
  }
}
