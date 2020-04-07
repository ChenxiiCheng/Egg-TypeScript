import { Controller, Context } from 'egg';

export default class BaseController extends Controller {
  private serviceName: string;

  constructor(serviceName: string, app: Context) {
    super(app);
    this.serviceName = serviceName;
  }

  /**
   * 列表 GET
   */
  public async index() {
    const { ctx } = this;
    const res = ctx.service[this.serviceName].list({}) || null;
    ctx.body = res;
  }

  /**
   * 单条 GET /:id
   */
  public async show() {
    const { ctx } = this;
    const res = await ctx.service[this.serviceName].one(ctx.params.id);
    ctx.body = {
      code: 1,
      msg: '获取单条记录',
      data: res,
    };
  }

  /**
   * 新增 POST
   */
  public async create() {
    const { ctx } = this;
    const res = await ctx.service[this.serviceName].save(ctx.request.body);
    ctx.body = {
      code: 1,
      msg: '新增成功',
      data: res,
    };
  }

  /**
   * 修改 PUT /:id
   */
  public async update() {
    const { ctx } = this;
    const res = await ctx.service[this.serviceName].update(
      ctx.params.id,
      ctx.request.body
    );
    ctx.body = {
      code: 1,
      msg: '修改成功',
      data: res,
    };
  }

  /**
   * 删除 DELETE /:id
   */
  public async destroy() {
    const { ctx } = this;
    const res = await ctx.service[this.serviceName].deleteOne(ctx.params.id);
    ctx.body = {
      code: 1,
      msg: '删除成功',
      data: res,
    };
  }
}
