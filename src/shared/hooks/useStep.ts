import { useRouter } from "next/navigation";
import { useState } from "react";

interface UseStepProps<T extends object> {
  steps: T;
  onComplete: () => void;
}

const useStep = <T extends object>(props: UseStepProps<T>) => {
  const router = useRouter();

  const { steps, onComplete } = props;
  const stepArr = Object.keys(steps);
  const [currentStep, setCurrentStep] = useState(0);

  const findEmptyStepIndex = stepArr.findIndex((key) => !steps[key as keyof T]);

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const goNext = () => {
    if (currentStep < stepArr.length - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }

    if (findEmptyStepIndex === -1) onComplete();
  };

  return { goBack, goNext, currentStep: stepArr[currentStep] as keyof T };
};

export default useStep;
