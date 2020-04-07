import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('Chenxi');
  }

  public async demo() {
    const { ctx } = this;
    ctx.body = await ctx.service.product.list({}); // 查询数据库的数据进行展示
  }
}
