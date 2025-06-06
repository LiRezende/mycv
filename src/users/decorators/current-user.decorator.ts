import {
    createParamDecorator,
    ExecutionContext
} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        // Get the incoming requet
        const request = context.switchToHttp().getRequest();
        console.log(request.session.userId);
        return request.currentUser;
    }
) 