/**
 * 
 */
package com.gudeng.commerce.gd.exception;

import java.util.List;

/**
 * 业务异常类
 * @author steven
 *
 */
public class BusinessException extends RuntimeException {

	private List para;

	public BusinessException(String message, Throwable cause) {
		super(message, cause);
	}

	public BusinessException(String message, List para) {
		super(message);

		this.para = para;
	}

	public BusinessException(String message) {
		super(message);
	}

	public BusinessException(Throwable cause) {
		super(cause);
	}

	public List getPara() {
		return para;
	}

	public void setPara(List para) {
		this.para = para;
	}

}
