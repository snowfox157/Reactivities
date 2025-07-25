using System;
using FluentValidation;
using MediatR;

namespace Application.Core;

public class ValidationBehavior<TRequest, Tresponse>(IValidator<TRequest> validator = null)
    : IPipelineBehavior<TRequest, Tresponse> where TRequest : notnull
{
    public async Task<Tresponse> Handle(TRequest request, RequestHandlerDelegate<Tresponse> next, CancellationToken cancellationToken)
    {
        if (validator == null) return await next();

        var validatonResult = await validator.ValidateAsync(request, cancellationToken);

        if (!validatonResult.IsValid)
        {
            throw new ValidationException(validatonResult.Errors);
        }

        return await next();
    }
}
