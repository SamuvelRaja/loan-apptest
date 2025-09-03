import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = PressableProps & {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

export default function Button({ label, onPress, variant = 'primary', className, disabled, ...rest }: Props) {
  const base = 'px-4 py-3 rounded-xl items-center justify-center';
  const variants: Record<NonNullable<Props['variant']>, string> = {
    primary: 'bg-primary shadow-lg shadow-blue-900/25',
    secondary: 'bg-secondary shadow-lg shadow-amber-900/20',
    outline: 'border border-white/10',
  };
  const labelCls = variant === 'outline' ? 'text-text' : 'text-white';
  const disabledCls = disabled ? 'opacity-50' : '';
  const scale = useSharedValue(1);
  const style = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  const onPressIn = () => (scale.value = withSpring(0.98, { damping: 20, stiffness: 300 }));
  const onPressOut = () => (scale.value = withSpring(1, { damping: 20, stiffness: 300 }));
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable
      accessibilityRole="button"
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={disabled ? undefined : onPress}
      className={[base, variants[variant], disabledCls, className].filter(Boolean).join(' ')}
      disabled={disabled}
      style={style}
      {...rest}
    >
      <Text className={labelCls}>{label}</Text>
    </AnimatedPressable>
  );
}
