import { FormikConfig, useFormik } from 'formik';
import 'twin.macro';
import { BookingRating } from '../../constants/types.constant';
import { TranslatorType } from '../../hooks/useTranslator/useTranslator.hook';
import { Button, RatingSelector, Text, TextArea } from '../atoms';

export type ReviewBookingFormSchema = {
  rating: BookingRating;
  comment: string;
};

type Props = {
  formConfig: FormikConfig<ReviewBookingFormSchema>;
  translator: TranslatorType;
};

function ReviewBookingForm({ formConfig, translator }: Props) {
  const { handleSubmit, values, setFieldValue, handleChange } = useFormik(formConfig);

  const handleRatingChange = (rating: BookingRating) => {
    setFieldValue('rating', rating).catch(() => {});
  };

  return (
    <form tw="flex space-y-6 flex-col" onSubmit={handleSubmit}>
      <Text.HeadingFive>{translator.translate('Write a review')}</Text.HeadingFive>
      <RatingSelector
        value={values.rating}
        onRatingClicked={(rating) => handleRatingChange(rating)}
      />
      <TextArea
        rows={5}
        placeholder={translator.translate('Write about your experience (optional)')}
        name="comment"
        onChange={handleChange}
      />
      <Button type="submit">Submit Review</Button>
    </form>
  );
}

export default ReviewBookingForm;
