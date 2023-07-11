import React, { memo } from 'react'

// Assets
import espresso from '../../assets/espresso.svg'
import americanEspresso from '../../assets/americanEspresso.svg'
import creamyEspresso from '../../assets/creamyEspresso.svg'
import icedEspresso from '../../assets/icedEspresso.svg'
import coffeeWithMilk from '../../assets/coffeeWithMilk.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import hotChocolate from '../../assets/hotChocolate.svg'
import cuban from '../../assets/cuban.svg'
import hawaiian from '../../assets/hawaiian.svg'
import arabic from '../../assets/arabic.svg'
import irish from '../../assets/irish.svg'

interface ProductImageProps {
  srcPath: string
  alternativeText: string
  widthImage?: number
}

const ProductImage: React.FC<ProductImageProps> = memo(
  ({ srcPath, alternativeText, widthImage }: ProductImageProps) => {
    let imageSrc = ''

    switch (srcPath) {
      case 'espresso':
        imageSrc = espresso
        break
      case 'americanEspresso':
        imageSrc = americanEspresso
        break
      case 'creamyEspresso':
        imageSrc = creamyEspresso
        break
      case 'icedEspresso':
        imageSrc = icedEspresso
        break
      case 'coffeeWithMilk':
        imageSrc = coffeeWithMilk
        break
      case 'latte':
        imageSrc = latte
        break
      case 'capuccino':
        imageSrc = capuccino
        break
      case 'macchiato':
        imageSrc = macchiato
        break
      case 'mocaccino':
        imageSrc = mocaccino
        break
      case 'hotChocolate':
        imageSrc = hotChocolate
        break
      case 'cuban':
        imageSrc = cuban
        break
      case 'hawaiian':
        imageSrc = hawaiian
        break
      case 'arabic':
        imageSrc = arabic
        break
      case 'irish':
        imageSrc = irish
        break
      default:
        imageSrc = espresso
    }

    return <img src={imageSrc} alt={alternativeText} width={widthImage} />
  },
)

ProductImage.displayName = 'ProductImage'

export default ProductImage
