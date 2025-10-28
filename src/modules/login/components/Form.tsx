import { FormProps } from '../types'
import { Input, Button } from '../../../shared/components'

const Form = ({ formData, fieldErrors, onInputChange, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex-1 flex flex-col justify-between">
      <div className="px-10">
        <div className="space-y-[20px]">
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={onInputChange('email')}
            error={fieldErrors?.email}
            required
          />

          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={onInputChange('password')}
            error={fieldErrors?.password}
            required
          />
        </div>
      </div>

      <div className="px-10">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full"
        >
          Log in
        </Button>
      </div>
    </form>
  )
}

export default Form
