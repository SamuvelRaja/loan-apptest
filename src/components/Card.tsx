import React, { useMemo } from 'react';
import { Pressable, View, ViewProps } from 'react-native';
import Animated, { FadeInUp, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = ViewProps & {
  onPress?: () => void;
  variant?: 'outline' | 'filled';
  className?: string;
  enterDelay?: number;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Card({ children, onPress, variant = 'outline', className, enterDelay, ...rest }: Props) {
  const base = 'rounded-2xl p-4 mb-3';
  const variants: Record<NonNullable<Props['variant']>, string> = {
    outline: 'bg-card border border-white/5 shadow-lg shadow-black/20',
    filled: 'bg-primary shadow-lg shadow-blue-900/25',
  };
  const cls = [base, variants[variant], className].filter(Boolean).join(' ');

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  const onPressIn = () => (scale.value = withSpring(0.98, { damping: 20, stiffness: 300 }));
  const onPressOut = () => (scale.value = withSpring(1, { damping: 20, stiffness: 300 }));

  const entering = useMemo(() => (enterDelay != null ? FadeInUp.delay(enterDelay).springify().damping(14) : FadeInUp.springify().damping(14)), [enterDelay]);

  if (onPress) {
    return (
      <AnimatedPressable
        entering={entering}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        className={cls}
        style={animatedStyle}
        {...(rest as any)}
      >
        {children}
      </AnimatedPressable>
    );
  }
  return (
    <Animated.View entering={entering} className={cls} style={animatedStyle} {...(rest as any)}>
      {children}
    </Animated.View>
  );
}
