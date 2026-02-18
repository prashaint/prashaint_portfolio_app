import React from 'react';

const LOGO_SRC = '/assets/images/mishra-ai-logo.png';

const Logo = ({
  variant = 'full', // 'icon', 'full', 'text'
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  className = '',
  showTagline = false,
}) => {
  const sizeConfig = {
    sm: {
      icon: 32,
      height: 40,
      textSize: 'text-lg',
      taglineSize: 'text-xs',
    },
    md: {
      icon: 40,
      height: 48,
      textSize: 'text-xl',
      taglineSize: 'text-sm',
    },
    lg: {
      icon: 48,
      height: 56,
      textSize: 'text-2xl',
      taglineSize: 'text-base',
    },
    xl: {
      icon: 64,
      height: 72,
      textSize: 'text-3xl',
      taglineSize: 'text-lg',
    },
  };

  const config = sizeConfig[size];

  const IconLogo = () => (
    <img
      src={LOGO_SRC}
      alt="MishraAI Logo"
      width={config.icon}
      height={config.icon}
      className={`rounded-full object-cover ${className}`}
      draggable={false}
    />
  );

  const FullLogo = () => (
    <div className={`flex items-center space-x-3 ${className}`}>
      <IconLogo />
      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-tight text-foreground ${config.textSize}`}>
          Prashaint Mishra
        </span>
        {showTagline && (
          <span className={`font-body text-muted-foreground ${config.taglineSize}`}>
            Senior Data Engineer
          </span>
        )}
      </div>
    </div>
  );

  const TextLogo = () => (
    <div className={`flex flex-col ${className}`}>
      <span className={`font-display font-bold tracking-tight text-foreground ${config.textSize}`}>
        Prashaint Mishra
      </span>
      {showTagline && (
        <span className={`font-body text-muted-foreground ${config.taglineSize} -mt-1`}>
          Senior Data Engineer
        </span>
      )}
    </div>
  );

  switch (variant) {
    case 'icon':
      return <IconLogo />;
    case 'text':
      return <TextLogo />;
    case 'full':
    default:
      return <FullLogo />;
  }
};

export const AnimatedLogo = (props) => (
  <Logo {...props} />
);

export const CompactLogo = (props) => (
  <Logo {...props} variant="icon" size="sm" />
);

export const LogoWithTagline = (props) => (
  <Logo {...props} showTagline={true} />
);

export default Logo;
