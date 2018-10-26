
import * as sinon from 'sinon';

import UserController from './user.controller';
import UserModel from './user.model';
import { Context } from 'koa';

describe('User controller tests', () => {
    // test that controller calls model with id
    // @TODO: how to mock the model?
    test('should call user.model with id', async () => {
        const modelSpy = sinon.spy(UserModel, 'getUser');
        const mockContext: Context = { params: { id: '15' } } as Context;

        await UserController.getUser(mockContext);
        sinon.assert.calledOnce(modelSpy);
    })
})
