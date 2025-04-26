import { useEffect } from 'react';

function BreadcrumbSchema({ categoryName, subCategoryName, productCode }) {
  const baseUrl = 'https://www.mayuriinternational.com/categories';

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mayuriinternational.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryName?.replace(/-/g, " "),
        "item": `${baseUrl}/${categoryName}`
      },
    ]
  };

  if (subCategoryName) {
    breadcrumbList.itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "name": subCategoryName?.replace(/-/g, " "),
      "item": `${baseUrl}/${categoryName}/${subCategoryName}`
    });
  }

  if (productCode) {
    breadcrumbList.itemListElement.push({
      "@type": "ListItem",
      "position": 4,
      "name": productCode?.replace(/-/g, " "),
      "item": `${baseUrl}/${categoryName}/${subCategoryName}/${productCode}`
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}

export default BreadcrumbSchema;
