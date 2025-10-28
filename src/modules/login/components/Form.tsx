import { FormProps } from '../types'
import { Input, Button } from '../../../shared/components'

const Form = ({ formData, fieldErrors, onInputChange, onSubmit, isLoading }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={onInputChange('email')}
          error={fieldErrors?.email}
          disabled={isLoading}
        />

        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={onInputChange('password')}
          error={fieldErrors?.password}
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full mt-4"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-3">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            <span>Logging in...</span>
          </div>
        ) : (
          'Log in'
        )}
      </Button>
    </form>
  )
}

export default Form
