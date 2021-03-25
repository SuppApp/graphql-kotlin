package com.expediagroup.graphql.generated.firstquery

import com.expediagroup.graphql.generated.ID
import com.expediagroup.graphql.generated.scalars.UUID
import kotlin.Int
import kotlinx.serialization.Serializable

/**
 * Wrapper that holds all supported scalar types
 */
@Serializable
public data class ScalarWrapper(
  /**
   * A signed 32-bit nullable integer value
   */
  public val count: Int?,
  /**
   * Custom scalar
   */
  public val custom: UUID,
  /**
   * ID represents unique identifier that is not intended to be human readable
   */
  public val id: ID
)
