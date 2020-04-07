// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportArticles from '../../../app/service/articles';
import ExportBase from '../../../app/service/base';
import ExportProduct from '../../../app/service/product';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    articles: AutoInstanceType<typeof ExportArticles>;
    base: AutoInstanceType<typeof ExportBase>;
    product: AutoInstanceType<typeof ExportProduct>;
  }
}
